import { QuestionsDB } from "@/types/question";
import { frontendBlock } from "@/data/questions/frontend";
import { javascriptBlock } from "@/data/questions/javascript";


export const QUESTIONS_DB: QuestionsDB = {
  frontend: frontendBlock,
  javascript: javascriptBlock
};