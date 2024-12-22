"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE
export const createTask = async (title) => {
  return await prisma.task.create({
    data: {
      title: title,
    },
  });
};

// READ
export const findTasks = async () => {
  return await prisma.task.findMany();
};

// UPDATE
export const toggleCheckTask = async (id, value) => {
  return await prisma.task.update({
    where: { id: id },
    data: {
      checked: !value,
    },
  });
};

// DELETE
export const deleteTask = async (id) => {
  return await prisma.task.delete({
    where: {
      id: id,
    },
  });
};
