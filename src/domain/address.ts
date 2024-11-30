import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EvenT } from "./Event";

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn("uuid")
  private id!: number;

  @Column("varchar", { length: 100 })
  private city!: string;

  @Column("varchar", { length: 100 })
  private uf!: string;

  @ManyToOne(() => EvenT, (event) => event)
  @JoinColumn({ name: 'event_id' })
  private event!: EvenT;
}