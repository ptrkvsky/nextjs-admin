import React from 'react';
import { useRouter } from 'next/router';
import { Head } from '@/components/Head';
import { TemplateConfirmation } from '@/features/auth/templates';
import { LayoutMain } from '@/components/Layouts/LayoutMain';
import { selectCurrentUser } from '@/features/auth/slices/authSlice';
import { useSelector } from 'react-redux';

export default function Confirmation() {
  const router = useRouter();

  const user = useSelector(selectCurrentUser);

  if (user) {
    router.push(`/`);
  }

  return (
    <>
      <Head title="Confirmation" />
      <LayoutMain>
        <TemplateConfirmation />
      </LayoutMain>
    </>
  );
}
