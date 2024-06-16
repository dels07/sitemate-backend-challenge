export type Issue = {
    id?: number,
    title: string,
    description: string,
}

export const issues: Issue[] = [
    { id: 1, title: 'Issue #1', description: 'description for issue #1' },
    { id: 2, title: 'Issue #2', description: 'description for issue #2' },
    { id: 3, title: 'Issue #3', description: 'description for issue #3' },
];