import { Entity, OneToMany, PrimaryColumn, Unique } from "typeorm";
import TagRef from "./TagReference";

@Entity({ name: "tags" })
@Unique(["name"])
export default class Tag {
    @PrimaryColumn()
    name: string;

    @OneToMany(() => TagRef, (tagRef) => tagRef.tag)
    tagRefs: TagRef[];
}
