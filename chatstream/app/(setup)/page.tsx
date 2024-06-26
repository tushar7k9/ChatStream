import React from 'react'
import { initialProfile } from '@/lib/initial-profile'
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import CreateServerModal from '@/components/modals/create-server-modal';

const Setup = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if(server) {
    return redirect(`/servers/${server.id}`)
  }

  return (
    <CreateServerModal />
  )
}

export default Setup
