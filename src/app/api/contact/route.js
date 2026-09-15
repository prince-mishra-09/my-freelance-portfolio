import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { need, businessType, goal, budget, details, name, email, phone } = data;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Construct the email content
    const htmlContent = `
      <h2>New Project Enquiry from ${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone/WhatsApp:</strong> ${phone || 'Not provided'}</p>
      <hr />
      <h3>Project Details</h3>
      <ul>
        <li><strong>What they need:</strong> ${need || 'Not specified'}</li>
        <li><strong>Business Type:</strong> ${businessType || 'Not specified'}</li>
        <li><strong>Primary Goal:</strong> ${goal || 'Not specified'}</li>
        <li><strong>Budget Range:</strong> ${budget || 'Not specified'}</li>
      </ul>
      <h3>Additional Context</h3>
      <p>${details || 'No additional details provided.'}</p>
    `;

    // Send the email using Resend
    // Note: 'onboarding@resend.dev' is a testing domain provided by Resend.
    // It can only send emails to the address associated with your Resend account.
    const { data: resendData, error } = await resend.emails.send({
      from: 'Xwaked Portfolio <onboarding@resend.dev>',
      to: ['mrprimi91@gmail.com'],
      subject: `New Project Enquiry: ${name} - ${businessType || 'General'}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing the request.' },
      { status: 500 }
    );
  }
}
