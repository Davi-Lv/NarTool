import { Story } from './story.entity';
import { StoryService } from './story.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller()
export class StoryController {
    constructor(private readonly storyService: StoryService) { }

    @Post('CreateNewStory')
    async PostCreateNewHistory(@Body() storyData: Partial<any>, @Req() req: Request): Promise<Story> {

        // Nartool-GPT-Model
        const generateText = (list: string[]) => {
            const randomIndex = Math.floor(Math.random() * list.length);
            return list[randomIndex];
        };
        const titles = [
            "A Jornada do Destino",
            "Os Segredos do Abismo",
            "A Última Resistência",
            "O Poder da Imaginação",
            "A Queda dos Reinos",
            "A Herança Perdida",
            "A Maldição da Lua",
            "A Ascensão do Caos",
            "O Legado dos Antigos",
            "O Mistério da Escuridão",
            "A Busca pelo Infinito",
            "O Despertar dos Elementos",
            "O Destino dos Heróis",
            "A Profecia Esquecida",
            "O Pacto dos Mundos",
            "A Queda dos Deuses",
            "O Enigma da Eternidade",
            "A Lenda do Guerreiro",
            "A Magia Proibida",
            "A Conspiração das Sombras"
        ];

        const premises = [
            "Em um mundo devastado pela guerra, um herói improvável deve reunir um grupo de aliados para derrotar o inimigo e restaurar a paz.",
            "Uma jovem descobre um portal mágico que a transporta para um reino encantado, onde ela deve enfrentar desafios e salvar sua família.",
            "Num futuro distópico, um grupo de rebeldes luta contra um governo opressor em uma batalha épica pela liberdade.",
            "Um cientista brilhante inventa uma máquina do tempo e viaja para o passado para impedir um evento catastrófico.",
            "Uma criança com habilidades especiais é enviada a uma escola de magia, onde descobre seu verdadeiro potencial e enfrenta um antigo mal.",
            "Um detetive particular é contratado para desvendar um assassinato misterioso, mergulhando num mundo de conspirações e traições.",
            "Numa terra dominada por criaturas fantásticas, um jovem guerreiro embarca numa jornada para se tornar o campeão dos deuses.",
            "Um grupo de aventureiros parte numa expedição perigosa em busca de um artefato lendário que pode conceder poderes divinos.",
            "Uma guerra ancestral entre duas raças sobrenaturais ameaça destruir o mundo, e apenas um herói destinado pode detê-la.",
            "Um cientista faz uma descoberta que desafia as leis da física e leva a humanidade a enfrentar consequências imprevisíveis."
        ];

        const genresAndThemes = [
            "Fantasia épica",
            "Ficção científica distópica",
            "Magia e aventura",
            "Suspense e mistério",
            "Pós-apocalipse",
            "Realidade virtual",
            "Super-heróis e vilões",
            "Viagem no tempo",
            "Mitos e lendas",
            "Conspirações e traições",
            "Tecnologia avançada",
            "Mundo subaquático",
            "Amor proibido",
            "Robôs e inteligência artificial",
            "Exploração espacial",
            "Artefatos antigos",
            "Deuses e deusas",
            "Guerras intergalácticas",
            "Ciberpunk",
            "Realidade alternativa"
        ];

        const rulesAndMechanics = [
            "Sistema de combate tático por turnos",
            "Customização de personagens e equipamentos",
            "Resolução de quebra-cabeças e enigmas",
            "Criação e gerenciamento de cidades ou bases",
            "Sistema de diálogos com múltiplas escolhas e consequências",
            "Cooperativo online com classes e habilidades únicas",
            "Mundo aberto com exploração livre",
            "Crafting e sistema de melhorias de equipamentos",
            "Sistema de níveis e progressão de personagens",
            "Modo multiplayer competitivo",
            "Construção e gerenciamento de impérios",
            "Sigilo e furtividade",
            "Interação com NPCs e tomada de decisões impactantes",
            "Elementos de sobrevivência e gerenciamento de recursos",
            "Desafios de plataforma e habilidades acrobáticas",
            "Sistema de magias e feitiços",
            "Quebra de quarta parede e humor autoreferencial",
            "Puzzles em realidade virtual",
            "Construção de veículos e máquinas",
            "Combate corpo a corpo estratégico"
        ];

        const explorationAreas = [
            "Floresta mística",
            "Cidade futurista",
            "Templo antigo",
            "Caverna enigmática",
            "Espaço sideral",
            "Ruínas submersas",
            "Castelo assombrado",
            "Planeta alienígena",
            "Mundo virtual",
            "Ilha perdida",
            "Cidade medieval",
            "Deserto escaldante",
            "Estação espacial",
            "Reino das fadas",
            "Cidade subterrânea",
            "Laboratório científico",
            "Floresta amaldiçoada",
            "Colônia espacial",
            "Metrópole cyberpunk",
            "Oceano profundo"
        ];
        // Fim Nartool-GPT-Model
        // Invisível aos olhos porém pleno em sua missão o GPT opera com destreza - Nartool 2023

        const userEmail = req.headers['email'] as string;
        const newStory = new Story();
        newStory.title = generateText(titles);
        newStory.premise = generateText(premises);
        newStory.genreAndTheme = generateText(genresAndThemes);
        newStory.RulesAndMechanics = generateText(rulesAndMechanics);
        newStory.explorationArea = generateText(explorationAreas);
        newStory.emailStory = userEmail;

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

    @Delete('DeleteHistory/:id')
    async DeleteHistory(@Param('id') id: number): Promise<string> {
        await this.storyService.delete(id);
        return 'story deleted';
    }

    @Get('Story/:id')
    async findOne(@Param('id') id: number): Promise<any> {
        await this.storyService.findOne(id);
        if (!this.storyService.findOne(id)) {
            return 'story not found'
        } else {
            return this.storyService.findOne(id);
        }
    }

    @Delete('DeleteAllUserStories')
    async DeleteUserStories(@Req() req: Request): Promise<string> {
        const userEmail = req.headers['email'] as string;
        await this.storyService.DeleteAllUserStories(userEmail);
        return 'user stories deleted';
    }

    @Get('listUserStories')
    async findUserStories(@Req() req: Request): Promise<Story[]> {
        const userEmail = req.headers['email'] as string;
        return this.storyService.findUserStories(userEmail);
    }
}
