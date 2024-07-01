import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { currentUser, auth } from "@clerk/nextjs/server";
 
const f = createUploadthing();

const handleAuth = async () => {
    const user = await currentUser();
    if (!user) {
        throw new Error("Unauthorized access to upload")
    }
    return {userId : user.id};
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
   serverImage: f({ image: {maxFileSize: '4MB', maxFileCount: 1}})
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
    
    messageFile: f(['image', 'pdf'])
        .middleware(() => handleAuth())
        .onUploadComplete(() => {})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;