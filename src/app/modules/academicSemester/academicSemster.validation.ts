import { z } from 'zod'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constant'

export const createAcademicSemestedZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'tittle is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'start month is required',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
  }),
})

export const updateAcademicSemestedZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemesterTitle] as [string, ...string[]], {
          required_error: 'tittle is required',
        })
        .optional(),
      year: z
        .number({
          required_error: 'year is required',
        })
        .optional(),
      code: z.enum([...academicSemesterCode] as [string, ...string[]]),
      startMonth: z
        .enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'start month is required',
        })
        .optional(),
      endMonth: z
        .enum([...academicSemesterMonth] as [string, ...string[]], {
          required_error: 'end month is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && data.body.code),
    {
      message: 'update data both title and code should be provided or naither',
    }
  )
