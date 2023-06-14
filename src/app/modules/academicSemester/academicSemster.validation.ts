import { z } from 'zod'

export const createAcademicSemestedZodSchema = z.object({
  body: z.object({
    title: z.enum(['autumn', 'summer', 'fall'], {
      required_error: 'tittle is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum(['01', '02', '03']),
    startMonth: z.enum(
      [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
      ],
      {
        required_error: 'end month is required',
      }
    ),
    endMonth: z.enum(
      [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
      ],
      {
        required_error: 'end month is required',
      }
    ),
  }),
})
