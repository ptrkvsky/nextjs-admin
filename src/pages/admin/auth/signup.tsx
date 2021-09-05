import React from 'react';
import { Head } from '@/components/Head';
import { TemplateSignUp } from '@/features/auth/templates';
import { LayoutMain } from '@/components/Layouts/LayoutMain';

export default function Signup() {
  return (
    <>
      <Head title="Signup" />
      <LayoutMain>
        <TemplateSignUp />
      </LayoutMain>
    </>
  );
}
