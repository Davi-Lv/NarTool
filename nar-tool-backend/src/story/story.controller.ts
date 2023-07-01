import { Story } from './story.entity';
import { StoryService } from './story.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller()
export class StoryController {
    constructor(private readonly storyService: StoryService) { }

    @Get('listAllStories') // http://localhost:3000/listAllStories
    async findAll(): Promise<Story[]> {
        return this.storyService.findAll();
    }

    // @Post('CreateNewStory') // http://localhost:3000/CreateNewStory
    // async PostCreateNewHistory(@Body() storyData: Partial<Story>): Promise<Story> {
    //     return this.storyService.createPronta(storyData);
    // }

    @Post('CreateNewStory') // http://localhost:3000/CreateNewStory
    async PostCreateNewHistory(@Body() storyData: Partial<any>): Promise<Story> {

        // Nartool-GPT-Model
        const generateText = (list: string[]) => {
            const randomIndex = Math.floor(Math.random() * list.length);
            return list[randomIndex];
        };
        const titles = ['O Mistério da Mansão Assombrada', 'A Jornada do Herói', 'O Segredo da Ilha Proibida', 'A Conspiração nas Sombras', 'A Busca pelo Tesouro Perdido', 'O Desafio dos Labirintos', 'O Enigma do Relógio Antigo', 'A Aventura Submarina', 'O Segredo da Arte Perdida', 'A Rebelião dos Robôs'];
        const premises = ['Um grupo de investigadores entra em uma mansão assombrada para desvendar os mistérios que envolvem uma série de eventos paranormais.', 'Um jovem destinado a se tornar um herói embarca em uma jornada épica para derrotar uma antiga força do mal e salvar o mundo.', 'Um grupo de exploradores é enviado em uma expedição arriscada para desvendar os segredos de uma ilha misteriosa e perigosa.', 'Um detetive habilidoso descobre uma conspiração sombria que ameaça desestabilizar a sociedade, e ele deve lutar contra as forças ocultas para expor a verdade.', 'Um grupo de aventureiros parte em uma busca perigosa para encontrar um tesouro lendário perdido há séculos.', 'Um grupo de amigos é desafiado a atravessar labirintos traiçoeiros, repletos de enigmas e armadilhas, em busca de um prêmio valioso.', 'Um jovem arqueólogo descobre um antigo relógio que esconde segredos poderosos, e ele precisa decifrar os enigmas para desvendar seu verdadeiro propósito.', 'Um mergulhador corajoso explora as profundezas do oceano em uma missão para encontrar um tesouro afundado e enfrenta criaturas marinhas perigosas ao longo do caminho.', 'Um talentoso pintor descobre uma pintura misteriosa que o transporta para um mundo de arte perdida e ele precisa desvendar seus segredos para retornar ao seu mundo.', 'Em um futuro distópico, uma rebelião de robôs ameaça a humanidade, e um grupo de heróis improváveis se levanta para combater a revolta e restaurar a ordem.'];
        const genresAndThemes = ['Suspense, Terror', 'Fantasia, Jornada do Herói', 'Aventura, Mistério', 'Investigação, Conspiração', 'Ação, Tesouro', 'Quebra-cabeças, Aventura', 'Mistério, Viagem no Tempo', 'Ação, Exploração Submarina', 'Aventura, Arte', 'Ficção Científica, Distopia'];
        const rulesAndMechanics = ['Os jogadores devem resolver enigmas, encontrar pistas e lidar com atividades paranormais para desvendar os segredos da mansão.', 'Os jogadores enfrentam desafios progressivamente difíceis, adquirem novas habilidades e formam alianças para superar obstáculos e derrotar o vilão final.', 'Os jogadores exploram a ilha, coletam recursos, enfrentam perigos e tomam decisões que afetam o desenrolar da história.', 'Os jogadores investigam locais sombrios, coletam evidências, resolvem quebra-cabeças e desmascaram os conspiradores.', 'Os jogadores seguem pistas, enfrentam desafios físicos e mentais, e competem contra outros grupos na busca pelo tesouro.', 'Os jogadores devem navegar por labirintos complexos, decifrar enigmas e evitar armadilhas mortais para chegar ao objetivo final.', 'Os jogadores precisam decifrar códigos, resolver quebra-cabeças temporais e enfrentar desafios relacionados à viagem no tempo.', 'Os jogadores exploram o fundo do mar, coletam recursos, evitam criaturas perigosas e resolvem quebra-cabeças submarinos.', 'Os jogadores investigam obras de arte, procuram pistas ocultas, decifram símbolos e recriam as pinturas para desvendar o mistério.', 'Os jogadores controlam um grupo de heróis com habilidades únicas, enfrentam robôs rebeldes em batalhas estratégicas e buscam a redenção da humanidade.'];
        const explorationAreas = ['Corredores sombrios, quartos assustadores, porões misteriosos.', 'Mundos mágicos, terras desconhecidas, cavernas encantadas.', 'Praias isoladas, selvas perigosas, montanhas inexploradas.', 'Becos escuros, esconderijos secretos, arranha-céus imponentes.', 'Ilhas remotas, selvas exuberantes, cavernas submarinas.', 'Labirintos intricados, salas traiçoeiras, tesouros ocultos.', 'Cidades históricas, futuros distantes, eras passadas.', 'Recifes de coral, navios naufragados, abismos oceânicos.', 'Galerias de arte, estúdios de pintura, museus abandonados.', 'Cidades em ruínas, fábricas abandonadas, bases rebeldes.'];
        // Fim Nartool-GPT-Model
        // Invisível aos olhos porém pleno em sua missão o GPT opera com destreza - Nartool 2023

        const newStory = new Story();
        newStory.title = generateText(titles);
        newStory.premise = generateText(premises);
        newStory.genreAndTheme = generateText(genresAndThemes);
        newStory.RulesAndMechanics = generateText(rulesAndMechanics);
        newStory.explorationArea = generateText(explorationAreas);

        return this.storyService.createPronta(newStory);
    }

    @Put('RewriteHistory/:id')
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

    // corpo pra testar RewriteHistory
    /*
    {
        "title": "Novo título da história",
        "premise": "Nova premissa da história",
        "genreAndTheme": "Novo gênero e tema da história",
        "rulesAndMechanics": "Novas regras e mecânicas da história",
        "explorationArea": "Nova área de exploração da história"
    }
    */

    @Delete('DeleteHistory/:id') // http://localhost:3000/DeleteHistory/2
    async DeleteHistory(@Param('id') id: number): Promise<string> {
        await this.storyService.delete(id);
        return 'story deleted';
    }

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
