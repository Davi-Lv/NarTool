import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Story } from './story.entity';

@Injectable()
export class StoryService {
  @Inject('STORY_REPOSITORY')
  private storyRepository: Repository<Story>

  async findOne(id: number): Promise<Story> {
    return this.storyRepository.findOne({ where: { id } });
  }

  // usar algum ChatBot quando finalizado
  async create(storyData: Partial<Story>): Promise<Story> {
    const newStory = this.storyRepository.create(storyData);
    return this.storyRepository.save(newStory);
  }

  async createPronta(storyData: Partial<Story>): Promise<Story> {
    const newStory = this.storyRepository.create(storyData);
    return this.storyRepository.save(newStory);
  }

  // reescrever uma história no banco de dados
  async rewrite(id: number, storyData: Partial<Story>): Promise<Story> {
    const story = await this.storyRepository.findOne({ where: { id } });
    if (!story) {
      throw new Error('História não encontrada');
    }
    const updatedStory = this.storyRepository.merge(story, storyData);
    return this.storyRepository.save(updatedStory);
  }

  async delete(id: number): Promise<void> {
    await this.storyRepository.delete(id);
  }

  async DeleteAllUserStories(userEmail: string): Promise<void> {
    await this.storyRepository.delete({ emailStory: userEmail });
  }

  async findUserStories(email: string): Promise<Story[]> {
    return this.storyRepository.find({ where: { emailStory: email } });
  }
}