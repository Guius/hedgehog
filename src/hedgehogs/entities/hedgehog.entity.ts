import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hedgehogs')
export class Hedgehog {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  creation_date: Date;

  @Column({ nullable: true })
  good: string;

  @Column({ nullable: true })
  bad: string;

  @Column({ nullable: true })
  improvements: string;

  @Column({ nullable: true })
  chosen_improvement: string;
}
