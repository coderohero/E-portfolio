import { useState, useEffect, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long")
});

type ContactFormData = z.infer<typeof contactSchema>;

interface AnimatedFieldProps {
  children: JSX.Element;
  label: string;
  error?: string;
  focused: boolean;
  hasValue: boolean;
}

function AnimatedField({ children, label, error, focused, hasValue }: AnimatedFieldProps) {
  return (
    <div className="relative">
      <div className={`
        absolute left-3 transition-all duration-300 pointer-events-none z-10
        ${focused || hasValue 
          ? 'top-0 text-xs text-primary transform -translate-y-1/2 bg-background px-2' 
          : 'top-1/2 text-sm text-muted-foreground transform -translate-y-1/2'
        }
      `}>
        {label}
      </div>
      <div className={`
        relative transition-all duration-300
        ${focused ? 'transform scale-105' : ''}
        ${error ? 'animate-shake' : ''}
      `}>
        {children}
      </div>
      {error && (
        <div className="text-red-500 text-xs mt-1 animate-slide-down">
          {error}
        </div>
      )}
    </div>
  );
}

export default function AnimatedContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const watchedValues = form.watch();

  // Calculate field completion progress - use stable calculation to prevent re-renders
  const getFieldProgress = useCallback((key: string, value: string) => {
    const maxLength = key === 'message' ? 200 : key === 'subject' ? 50 : 30;
    return Math.min((value.length / maxLength) * 100, 100);
  }, []);

  const fieldProgress = useMemo(() => ({
    name: getFieldProgress('name', watchedValues.name || ''),
    email: getFieldProgress('email', watchedValues.email || ''),
    subject: getFieldProgress('subject', watchedValues.subject || ''),
    message: getFieldProgress('message', watchedValues.message || '')
  }), [watchedValues.name, watchedValues.email, watchedValues.subject, watchedValues.message, getFieldProgress]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form submission:', data);
      setSubmitSuccess(true);
      
      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      form.reset();
      
      // Reset success state after animation
      setTimeout(() => setSubmitSuccess(false), 3000);
      
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later or reach out via email directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalProgress = Object.values(fieldProgress).reduce((sum, val) => sum + val, 0) / 4;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Ring */}
      <div className="flex justify-center mb-8">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${totalProgress * 0.628} 62.8`}
              className="transition-all duration-500 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">
              {Math.round(totalProgress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      {submitSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="success-animation bg-primary text-primary-foreground px-8 py-4 rounded-full transform scale-0 animate-success-popup">
            <i className="fas fa-check-circle text-2xl mr-3"></i>
            Message Sent Successfully!
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <AnimatedField
                  label="Full Name"
                  error={form.formState.errors.name?.message}
                  focused={focusedField === 'name'}
                  hasValue={!!field.value}
                >
                  <FormControl>
                    <Input
                      {...field}
                      className={`
                        h-14 pl-3 pr-3 pt-4 pb-2 text-base border-2 transition-all duration-300
                        ${focusedField === 'name' 
                          ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                        }
                        ${form.formState.errors.name ? 'border-red-500' : ''}
                      `}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      data-testid="input-name"
                    />
                  </FormControl>
                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${fieldProgress.name || 0}%` }}
                    />
                  </div>
                </AnimatedField>
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <AnimatedField
                  label="Email Address"
                  error={form.formState.errors.email?.message}
                  focused={focusedField === 'email'}
                  hasValue={!!field.value}
                >
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className={`
                        h-14 pl-3 pr-3 pt-4 pb-2 text-base border-2 transition-all duration-300
                        ${focusedField === 'email' 
                          ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                        }
                        ${form.formState.errors.email ? 'border-red-500' : ''}
                      `}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      data-testid="input-email"
                    />
                  </FormControl>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${fieldProgress.email || 0}%` }}
                    />
                  </div>
                </AnimatedField>
              </FormItem>
            )}
          />

          {/* Subject Field */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <AnimatedField
                  label="Subject"
                  error={form.formState.errors.subject?.message}
                  focused={focusedField === 'subject'}
                  hasValue={!!field.value}
                >
                  <FormControl>
                    <Input
                      {...field}
                      className={`
                        h-14 pl-3 pr-3 pt-4 pb-2 text-base border-2 transition-all duration-300
                        ${focusedField === 'subject' 
                          ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                        }
                        ${form.formState.errors.subject ? 'border-red-500' : ''}
                      `}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      data-testid="input-subject"
                    />
                  </FormControl>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${fieldProgress.subject || 0}%` }}
                    />
                  </div>
                </AnimatedField>
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <AnimatedField
                  label="Your Message"
                  error={form.formState.errors.message?.message}
                  focused={focusedField === 'message'}
                  hasValue={!!field.value}
                >
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={6}
                      className={`
                        pl-3 pr-3 pt-6 pb-2 text-base border-2 transition-all duration-300 resize-none
                        ${focusedField === 'message' 
                          ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                          : 'border-border hover:border-primary/50'
                        }
                        ${form.formState.errors.message ? 'border-red-500' : ''}
                      `}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      data-testid="input-message"
                    />
                  </FormControl>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-primary/20 w-full">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${fieldProgress.message || 0}%` }}
                    />
                  </div>
                </AnimatedField>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full h-14 text-lg font-semibold transition-all duration-300 relative overflow-hidden
                ${isSubmitting 
                  ? 'bg-primary/50 cursor-not-allowed' 
                  : 'bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-xl'
                }
              `}
              data-testid="button-submit"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending Message...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <i className="fas fa-paper-plane"></i>
                  <span>Send Message</span>
                </div>
              )}
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-white/20 transform scale-0 group-active:scale-100 transition-transform duration-300 rounded-md"></div>
              </div>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}