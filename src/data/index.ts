import { QuestionsDB } from "@/types/question";
import { frontendBlock } from "@/data/questions/frontend";
import { javascriptBlock } from "@/data/questions/javascript";
import { typescriptBlock } from "@/data/questions/typescript";
import { angularBlock } from "@/data/questions/angular";
import { reactBlock } from "@/data/questions/react";
import { nextjsBlock } from "@/data/questions/nextjs";
import { nestjsBlock } from "@/data/questions/nestjs";
import { nodejsBlock } from "@/data/questions/nodejs";
import { sqlBlock } from "@/data/questions/sql";
import { gitBlock } from "@/data/questions/git";


export const QUESTIONS_DB: QuestionsDB = {
  frontend: frontendBlock,
  javascript: javascriptBlock,
  typescript: typescriptBlock,
  angular: angularBlock,
  react: reactBlock,
  nextjs: nextjsBlock,
  nestjs: nestjsBlock,
  nodejs: nodejsBlock,
  sql: sqlBlock,
  git: gitBlock,
};