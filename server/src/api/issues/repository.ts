import { type Issue, issues } from './model';

export const find = () => {
    return issues;
}

export const findOne = (id: number) => {
    return issues.find((issue) => issue.id === id);
}

export const create = (payload: Issue) => {
    const data = { id: issues.length + 1, ...payload };
    issues.push(data);

    return data;
}

export const update = (id: number, payload: Issue) => {
    const issue = findOne(id);

    if (!issue) {
        return null;
    }

    const idx = id - 1;
    issues[idx] = payload;

    return issues[idx];
}

export const destroy = (id: number) => {
    const issue = findOne(id);

    if (!issue) {
        return false;
    }

    const idx = id - 1;
    delete issues[idx];

    return true;
}