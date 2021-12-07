import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hedgehogs')
export class Hedgehog {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  creation_date: Date;

  @Column()
  good: string;

  @Column()
  bad: string;

  @Column()
  improvements: string;

  @Column()
  chosen_improvement: string;
}
