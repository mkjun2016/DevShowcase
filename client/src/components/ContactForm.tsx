import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Send data to the API
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
    >
      <h3 className="font-heading text-2xl font-bold mb-6">Send a Message</h3>

      <div className="mb-6">
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            className={`w-full py-3 px-4 border ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-700"
            } rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
            placeholder="Your name"
            {...register("name")}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className={`w-full py-3 px-4 border ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-700"
            } rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
            placeholder="Your email"
            {...register("email")}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2 font-medium">
          Subject
        </label>
        <div className="relative">
          <input
            type="text"
            id="subject"
            className={`w-full py-3 px-4 border ${
              errors.subject
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-700"
            } rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
            placeholder="Subject of your message"
            {...register("subject")}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <MessageSquare className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {errors.subject && (
          <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full py-3 px-4 border ${
            errors.message
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-700"
          } rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`}
          placeholder="Your message"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
