import express from 'express';

import MessageResponse from '../../interfaces/MessageResponse';
import QueryParams from '../../interfaces/QueryParams';

import * as service from './service';

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  const data = service.all();

  return res.json({
    message: "successfully get list of issues",
    data,
  });
});

router.get<QueryParams, MessageResponse>("/:id", (req, res) => {
  const id = +req.params.id;
  const data = service.show(id);

  if (!data) {
    return res.json({
      message: `issue with id ${id} not found`,
    })
  }

  return res.json({
    message: "successfully get issue detail",
    data,
  });
});

router.post<{}, MessageResponse>("/", (req, res) => {
  const data = service.add(req.body);

  return res.status(201).json({
    message: "successfully create new issue",
    data,
  });
});

router.put<QueryParams, MessageResponse>("/:id", (req, res) => {
  const id = +req.params.id;
  const data = service.update(id, req.body);

  if (!data) {
    return res.json({
      message: `issue with id ${id} not found`,
    })
  }

  return res.json({
    message: `successfully update issue ${id}`,
    data,
  });
});

router.delete<QueryParams, MessageResponse>("/:id", (req, res) => {
  const id = +req.params.id;
  const status = service.remove(id);

  if (!status) {
    return res.json({
      message: `issue with id ${id} not found`,
    })
  }

  return res.status(204).json({
    message: `successfully delete issue ${id}`,
  });
});

export default router;
