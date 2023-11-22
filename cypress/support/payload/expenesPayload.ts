export interface CreateExpenesPayload {
    expenes: {
        name: string,
        description: string,
        status: boolean
    }
}
