import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('teste')
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('teste') //rota teste
    getHello(): any {
        return this.appService.getHello();
    }

    @Get('AllStories') //rota para listar todas as histórias
    GetAllStories(): string {
        return this.appService.GetAllStories();
    }

    @Post('CreateNewStory') //rota para criar nova história
    PostCreateNewHistory(): string {
        return this.appService.PostCreateNewHistory();
    }

    @Put('RewriteHistory/:id') //rota para reescrever sobre uma história
    PutRewriteHistory(): string {
        return this.appService.PutRewriteHistory();
    }

    @Delete('DeleteStory/:id') //rota para deletar um história específica
    DeleteStory(): string {
        return this.appService.DeleteStory();
    }

    @Delete('DeleteAllStory') //rota para deletar todas as histórias
    DeleteAllStory(): string {
        return this.appService.DeleteAllStory();
    }

    @Get('Story/:id') //rota para pesquisar uma história específica
    GetStory(): string {
        return this.appService.GetStory();
    }
}

/*
import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AppService } from "./app.service";
import { Story } from "./story.entity";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('teste') // Rota de teste
    getHello(): any {
        return this.appService.getHello();
    }

    @Get('AllStories') // Rota para listar todas as histórias
    getAllStories(): Promise<Story[]> {
        return this.appService.getAllStories();
    }

    @Post('CreateNewStory') // Rota para criar uma nova história
    createNewHistory(): Promise<Story> {
        return this.appService.createNewHistory();
    }

    @Put('RewriteHistory/:id') // Rota para reescrever uma história específica
    rewriteHistory(@Param('id') id: number): Promise<Story> {
        return this.appService.rewriteHistory(id);
    }

    @Delete('DeleteStory/:id') // Rota para deletar uma história específica
    deleteStory(@Param('id') id: number): Promise<void> {
        return this.appService.deleteStory(id);
    }

    @Delete('DeleteAllStory') // Rota para deletar todas as histórias
    deleteAllStory(): Promise<void> {
        return this.appService.deleteAllStory();
    }

    @Get('Story/:id') // Rota para obter uma história específica
    getStory(@Param('id') id: number): Promise<Story> {
        return this.appService.getStory(id);
    }
}
*/