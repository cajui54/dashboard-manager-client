'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ListFilter, Search } from 'lucide-react';

const formSchema = z.object({
  search: z.string().min(5, {
    message: 'Esse campo precisa de pelo menos 5 caracteres',
  }),
});
const FormSearchUser = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    router.push(`/users?search=${data.search}`);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-10 w-full items-center"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <Search className="absolute left-[5px] top-2 w-4" />
                <FormControl>
                  <Input
                    placeholder="Buscar..."
                    {...field}
                    className="h-10 w-[908px] border py-2 pl-7 pr-3"
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={'outline'}
          type="submit"
          size={'icon'}
          className="ml-3 rounded-full"
        >
          <ListFilter className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
};

export default FormSearchUser;
