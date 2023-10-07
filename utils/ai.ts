import { OpenAI } from 'langchain/llms/openai'
import {loadQAStuffChain} from "langchain/chains";
import {Document} from "langchain/document";

export const analyze = async (prompt: string, docs: string[]): Promise<string> => {
  console.log('calling model...')
  const start = Date.now()

  const modelName = 'gpt-3.5-turbo'
  const model = new OpenAI({temperature: 0, modelName: modelName})
  const chain = loadQAStuffChain(model)
  const documents = docs.map((doc) => new Document({pageContext: doc}))

  const result = await chain.call({
    input_documents: documents,
    question: prompt,
  });

  const duration = (Date.now() - start) / 1000
  console.log(`... took ${duration} seconds`)

  return result.text
}