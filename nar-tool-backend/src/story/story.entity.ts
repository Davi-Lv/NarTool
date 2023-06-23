import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Story {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 35})
    title: string;

    @Column({ length: 255 })
    premise: string;

    @Column({ length: 50 })
    genreAndTheme: string;

    @Column({ length: 255 })
    RulesAndMechanics: string;

    @Column({ length: 255 })
    explorationArea: string;
}
