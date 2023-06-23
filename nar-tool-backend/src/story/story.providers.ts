import { DataSource } from 'typeorm';
import { Story } from './story.entity';

export const storyProviders = [
  {
    provide: 'STORY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Story),
    inject: ['DATA_SOURCE'],
  },
];