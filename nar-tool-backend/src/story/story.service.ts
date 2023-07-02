import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Story } from './story.entity';

@Injectable()
export class StoryService {
  @Inject('STORY_REPOSITORY')
  private storyRepository: Repository<Story>

  // Buscar todas as histórias no banco de dados
  async findAll(): Promise<Story[]> {
    return this.storyRepository.find();
  }

  // Buscar uma história no banco de dados
  async findOne(id: number): Promise<Story> {
    return this.storyRepository.findOne({ where: { id } });
  }

  // (usando algum ChatBot quando finalizado)
  // criar nova história no banco de dados
  async create(storyData: Partial<Story>): Promise<Story> {
    const newStory = this.storyRepository.create(storyData);
    return this.storyRepository.save(newStory);
  }

  async createPronta(storyData: Partial<Story>): Promise<Story> {
    const newStory = this.storyRepository.create(storyData);
    return this.storyRepository.save(newStory);
  }

  // Criar nova história (pronta) no banco de dados para testar
  //async createPronta(storyData: Partial<Story>): Promise<Story> {
  //  const newStory = new Story();
  //  newStory.title = 'titulo da historia';
  //  newStory.premise = 'premissa da historia';
  //  newStory.genreAndTheme = 'genero e tema da historia';
  //  newStory.RulesAndMechanics = 'regras e mecanicas da historia';
  //  newStory.explorationArea = 'area de exploração da historia';
  //  return this.storyRepository.save(newStory);
  //}

  // reescrever uma história no banco de dados
  async rewrite(id: number, storyData: Partial<Story>): Promise < Story > {
  const story = await this.storyRepository.findOne({ where: { id } });
  if(!story) {
    throw new Error('História não encontrada');
  }
    const updatedStory = this.storyRepository.merge(story, storyData);
  return this.storyRepository.save(updatedStory);
}

  // deletar uma história no banco de dados
  async delete (id: number): Promise < void> {
  await this.storyRepository.delete(id);
}

  // deletar todas as histórias no banco de dados
  async deleteAll(): Promise < void> {
  await this.storyRepository.clear();
}
}