import { Injectable } from "@nestjs/common";
@Injectable()
export class AppService {
    getHello(): any {
        let objeto = {
            hello: "Hello, world!",
            nome: "davi",
            idade: 22
        }
        return objeto;
    }

    GetAllStories(): string {
        return "All Stories!";
    }

    PostCreateNewHistory(): string {
        return "Create New History!";
    }

    PutRewriteHistory(): string {
        return "Rewrite History!";
    }

    DeleteStory(): string {
        return "Delete Story!";
    }

    DeleteAllStory(): string {
        return "Delete All Story!";
    }

    GetStory(): string {
        return "Story!";
    }
}




/*
import { Injectable, Param } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Story } from "./story.entity";

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Story)
        private readonly storyRepository: Repository<Story>
    ) { }

    getHello(): any {
        return "Hello, world!";
    }

    async getAllStories(): Promise<Story[]> {
        return this.storyRepository.find();
    }

    async createNewHistory(): Promise<Story> {
        const newStory = this.storyRepository.create();
        // Tudo vai ser gerada pela API da OpenAI (por em quanto vai ser na mão)
        // Dados da nova história

        // newStory.title = "Terra Desolada: Em Busca da Cura"
        // newStory.premise = "Em um mundo pós-apocalíptico, os jogadores devem encontrar uma cura para uma doença mortal que está assolando a humanidade, enfrentando desafios e inimigos mutantes enquanto procuram por pistas e recursos."
        // newStory.genreAndTheme = "Ficção científica pós-apocalíptica."
        // newStory.RulesAndMechanics = "O jogo utiliza um sistema de rolagem de dados para determinar os resultados das ações dos jogadores, combinado com um sistema de pontos de vida, habilidades especiais e equipamentos para lidar com os desafios e combates."
        // newStory.explorationArea = "Os jogadores podem explorar uma vasta cidade em ruínas, cheia de edifícios abandonados, túneis subterrâneos, esgotos infestados de criaturas mutantes e áreas perigosas, como uma fábrica abandonada ou um laboratório secreto onde a cura pode ser encontrada."
        return this.storyRepository.save(newStory);
    }

    async rewriteHistory(id: number): Promise<Story> {
        const storyToUpdate = await this.storyRepository.findOne({ where: { id } });
        // Verifique se a história existe antes de atualizá-la
        if (!storyToUpdate) {
            // Lida com a lógica de erro ou retorno adequada
            return null;
        }
        // Atualize os campos da história conforme necessário
        // storyToUpdate.title = "teste"
        // storyToUpdate.premise = "teste"
        // storyToUpdate.genreAndTheme = "teste"
        // storyToUpdate.RulesAndMechanics = "teste"
        // storyToUpdate.explorationArea = "teste"
        return this.storyRepository.save(storyToUpdate);
    }

    async deleteStory(id: number): Promise<void> {
        await this.storyRepository.delete(id);
    }

    async deleteAllStory(): Promise<void> {
        await this.storyRepository.clear();
    }

    async getStory(id: number): Promise<Story> {
        return this.storyRepository.findOne({ where: { id } });
    }
}
*/