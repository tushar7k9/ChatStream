import React from 'react'
import { currentUser, auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

const currentProfile = async () => {

    const user = await currentUser();
    if (!user || (user && !user.id)) {
        return null;
    }

    const profile = await db.profile.findUnique({
        where: {
            userId: user.id
        }
    });

    return profile;
}

export default currentProfile;
