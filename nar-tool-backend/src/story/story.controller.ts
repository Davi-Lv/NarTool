import { Story } from './story.entity';
import { StoryService } from './story.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller()
export class StoryController {
    constructor(private readonly storyService: StoryService) { }

    // Buscar todas as historias no banco de dados
    @Get('listAllStories') // http://localhost:3000/listAllStories
    async findAll(): Promise<Story[]> {
        return this.storyService.findAll();
    }

    // Criar nova historia no banco de dados
    @Post('CreateNewStory') // http://localhost:3000/CreateNewStory
    async PostCreateNewHistory(@Body() storyData: Partial<Story>): Promise<Story> {
        return this.storyService.createPronta(storyData);
    }

    // corpo pra testar no postman
    /*
    {
        "title": "Título da história",
        "premise": "Premissa da história",
        "genreAndTheme": "Gênero e tema da história",
        "rulesAndMechanics": "Regras e mecânicas da história",
        "explorationArea": "Área de exploração da história"
    }
    */

    // reescrever uma historia no banco de dados
    @Put('RewriteHistory/:id') // http://localhost:3000/RewriteHistory/2
    async PutRewriteHistory(
        @Param('id') id: number,
        @Body() storyData: Partial<Story>,
    ): Promise<any> {
        if (!this.storyService.findOne(id)) {
            return 'story not exist'
        } else {
            return this.storyService.rewrite(id, storyData);
        }
    }

    // corpo pra testar no postman
    /*
    {
        "title": "Novo título da história",
        "premise": "Nova premissa da história",
        "genreAndTheme": "Novo gênero e tema da história",
        "rulesAndMechanics": "Novas regras e mecânicas da história",
        "explorationArea": "Nova área de exploração da história"
    }
    */

    // deletar uma história especifica no banco de dados
    @Delete('DeleteHistory/:id') // http://localhost:3000/DeleteHistory/2
    async DeleteHistory(@Param('id') id: number): Promise<string> {
        await this.storyService.delete(id);
        return 'story deleted';
    }

    // Buscar uma história especifica no banco de dados
    @Get('Story/:id') // http://localhost:3000/Story/2
    async findOne(@Param('id') id: number): Promise<any> {
        await this.storyService.findOne(id);
        if (!this.storyService.findOne(id)) {
            return 'story not found'
        } else {
            return this.storyService.findOne(id);
        }
    }

    // deletar todas as histórias no banco de dados
    @Delete('DeleteAllStories') // http://localhost:3000/DeleteAllStories
    async DeleteAllStories(): Promise<string> {
        await this.storyService.deleteAll();
        return 'all stories deleted';
    }
}
