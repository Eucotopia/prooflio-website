import { Resend } from 'resend';

const resend = new Resend('re_77i3mssc_7aQ54HDAdpyXZMJz4jkQamyW');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: '3499508634@qq.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});