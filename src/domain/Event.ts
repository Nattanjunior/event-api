import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class EvenT {
  @PrimaryGeneratedColumn("uuid")
  private id!: number;

  @Column("varchar", { length: 100 })
  private title!: string;

  @Column("varchar", { length: 250 })
  private description!: string;

  @Column("varchar", { length: 100 })
  private imgUrl!: string;

  @Column("boolean")
  private remote!: boolean;

  @Column("timestamp")
  private Date!: Date;
}