import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  inquiryType: 'general' | 'support' | 'sales' | 'partnership';
  subject: string;
  message: string;
}

const inquiryTypeLabels = {
  general: 'General Inquiry',
  support: 'Technical Support',
  sales: 'Sales Question',
  partnership: 'Partnership',
};

export const ContactEmail = ({
  name,
  email,
  company,
  inquiryType,
  subject,
  message,
}: ContactEmailProps) => {
  const previewText = `New contact form submission from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[600px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Section className="mt-[32px]">
              <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-black">
                New Contact Form Submission
              </Heading>
            </Section>

            <Section className="mb-[32px]">
              <Text className="text-[16px] text-black leading-[24px] font-semibold">
                Contact Details
              </Text>
              <Text className="text-[14px] text-black leading-[24px]">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-[14px] text-black leading-[24px]">
                <strong>Email:</strong> {email}
              </Text>
              {company && (
                <Text className="text-[14px] text-black leading-[24px]">
                  <strong>Company:</strong> {company}
                </Text>
              )}
              <Text className="text-[14px] text-black leading-[24px]">
                <strong>Inquiry Type:</strong> {inquiryTypeLabels[inquiryType]}
              </Text>
              <Text className="text-[14px] text-black leading-[24px]">
                <strong>Subject:</strong> {subject}
              </Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />

            <Section className="mb-[32px]">
              <Text className="text-[16px] text-black leading-[24px] font-semibold">
                Message
              </Text>
              <Text className="text-[14px] text-black leading-[24px] whitespace-pre-wrap">
                {message}
              </Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-[#eaeaea] border-solid" />

            <Section>
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                This message was sent from the Veloxpack contact form.
                Please reply directly to {email} to respond to this inquiry.
              </Text>
              <Text className="text-[#666666] text-[12px] leading-[24px] mt-4">
                Veloxpack - Kubernetes-native media processing platform
                <br />
                Ul. Czyżówka 16 /151, Kraków 30-526, POLAND
                <br />
                Phone: +48 576 168 430
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  company: 'Acme Inc.',
  inquiryType: 'general',
  subject: 'Question about Veloxpack platform',
  message: 'Hello, I would like to know more about your media processing platform and how it can help with our video streaming needs.',
} as ContactEmailProps;

export default ContactEmail;
