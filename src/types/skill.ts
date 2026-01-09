export type Direction = "left" | "right" | "bottom";

export type SkillItem = {
  name: string;
  icon: string;
};

export type SkillGroup = {
  title: string;
  color: string;
  direction: Direction;
  items: SkillItem[];
};
