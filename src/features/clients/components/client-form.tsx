import Link from 'next/link'
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { TextButton } from '@/components/text-button'

interface Props {
  type: 'create' | 'update'
  form: UseFormReturn<any>
  onSubmit: SubmitHandler<any>
}

export function ClientForm({ type, form, onSubmit }: Props) {
  const type_message = type === 'create' ? 'Create' : 'Update'

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-10">
        <header className="flex flex-col">
          <h1 className="text-3xl font-medium">{type_message} client</h1>

          <p className="text-xl font-normal opacity-40">
            Fill the form out below to {type_message.toLowerCase()} {type === 'create' ? 'a new' : 'this'} client.
          </p>
        </header>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-11">
          <div>
            <section className="flex flex-col gap-4 mb-4 md:flex-row md:mb-8">
              <Input label="Name" name="name" />
              <Input label="Surname" name="surname" />
            </section>

            <section className="flex flex-col gap-4 md:flex-row">
              <Input label="Email" name="email" type="email" />
              <Input label="Phone" name="phone" mask="(##) #####-####" />
            </section>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="h-9">
              {type_message}
            </Button>

            <TextButton>
              <Link href="/clients">Cancel</Link>
            </TextButton>
          </div>
        </form>
      </div>
    </FormProvider>
  )
}
