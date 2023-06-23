import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { storyProviders } from './story.providers';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [StoryController],
  providers: [
    ...storyProviders,
    StoryService,
  ],
})
export class StoryModule {}