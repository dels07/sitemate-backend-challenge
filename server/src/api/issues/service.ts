import { type Issue } from './model';
import * as repo from './repository';

export const all = () => {
    return repo.find();
}

export const show = (id: number) => {
    return repo.findOne(id);
}

export const add = (payload: Issue) => {
    return repo.create(payload);
}

export const update = (id: number, payload: Issue) => {
    return repo.update(id, payload);
}

export const remove = (id: number) => {
    return repo.destroy(id);
}