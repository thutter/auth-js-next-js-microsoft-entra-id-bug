import NextAuth from "next-auth"
import "next-auth/jwt"
import MicrosoftEntraId from "next-auth/providers/microsoft-entra-id"

export const {handlers, auth, signIn, signOut} = NextAuth({
        providers: [
            MicrosoftEntraId
        ],
        callbacks: {
            authorized({auth}) {
                return !!auth
            },
        }
    }
)
