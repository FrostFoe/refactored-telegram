'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'নাম কমপক্ষে ২ অক্ষরের হতে হবে।' }),
  email: z.string().email({ message: 'অনুগ্রহ করে একটি বৈধ ইমেল ঠিকানা লিখুন।' }),
  message: z.string().min(10, { message: 'বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে।' }),
});

export default function ContactForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "বার্তা পাঠানো হয়েছে!",
            description: "যোগাযোগ করার জন্য ধন্যবাদ। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
        });
        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-medium text-gray-700">আপনার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="আপনার নাম" {...field} className="py-6"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-medium text-gray-700">আপনার ইমেল</FormLabel>
                    <FormControl>
                      <Input placeholder="আপনার ইমেল" {...field} className="py-6" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base font-medium text-gray-700">আপনার বার্তা</FormLabel>
                    <FormControl>
                      <Textarea placeholder="আপনার প্রকল্প, আপনার দৃষ্টিভঙ্গি, আপনার চ্যালেঞ্জ সম্পর্কে আমাদের বলুন..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Button type="submit" size="lg" className="w-full py-7 text-base md:text-lg">
                    বার্তা পাঠান <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </form>
          </Form>
    )
}
