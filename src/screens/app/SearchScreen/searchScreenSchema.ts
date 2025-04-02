import {z} from 'zod';

export const searchScreenSchema = z.object({
  animeName: z.string().min(1, 'Enter the correct name'),
});

export type SearchScreenSchemaType = z.infer<typeof searchScreenSchema>;
