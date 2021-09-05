import React from 'react';
import { Head } from '@/components/Head';
import { TemplateConfirmation } from '@/features/auth/templates';
import { LayoutMain } from '@/components/Layouts/LayoutMain';

export default function Confirmation() {
  return (
    <>
      <Head title="Confirmation" />
      <LayoutMain>
        <TemplateConfirmation />
      </LayoutMain>
    </>
  );
}
