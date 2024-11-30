import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class EvenT {
  @PrimaryGeneratedColumn()
  private id!: number;
  @Column()
  private title!: string;
  @Column()
  private description!: string;
  @Column()
  private imgUrl!: string;
  @Column()
  private remote!: boolean;
  @Column()
  private Date!: Date;
}