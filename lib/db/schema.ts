import { pgTable, serial, text, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";

export const lessons = pgTable("lessons", {
  id: serial("id").primaryKey(),
  mannaId: text("manna_id").unique(),
  title: text("title").notNull(),
  titleEn: text("title_en"), // Original em inglês
  description: text("description"),
  content: jsonb("content").notNull(), // Conteúdo da lição em formato JSON
  difficulty: integer("difficulty").default(1),
  xpReward: integer("xp_reward").default(10),
  order: integer("order").default(0), // Ordem das lições
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  lessonId: integer("lesson_id").references(() => lessons.id),
  question: text("question").notNull(),
  questionEn: text("question_en"), // Original em inglês
  options: jsonb("options").notNull(), // Array de opções [string, string, ...]
  correctAnswer: integer("correct_answer").notNull(), // Índice da opção correta
  explanation: text("explanation"),
  explanationEn: text("explanation_en"), // Original em inglês
  order: integer("order").default(0), // Ordem da questão na lição
  createdAt: timestamp("created_at").defaultNow(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(), // ID do Neon Auth
  lessonId: integer("lesson_id").references(() => lessons.id),
  completed: boolean("completed").default(false),
  score: integer("score"), // Pontuação (0-100)
  attempts: integer("attempts").default(0),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userStats = pgTable("user_stats", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull().unique(), // ID do Neon Auth
  totalXp: integer("total_xp").default(0),
  currentStreak: integer("current_streak").default(0), // Dias consecutivos
  longestStreak: integer("longest_streak").default(0),
  lessonsCompleted: integer("lessons_completed").default(0),
  lastActivityAt: timestamp("last_activity_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Types TypeScript inferidos do schema
export type Lesson = typeof lessons.$inferSelect;
export type NewLesson = typeof lessons.$inferInsert;

export type Question = typeof questions.$inferSelect;
export type NewQuestion = typeof questions.$inferInsert;

export type UserProgress = typeof userProgress.$inferSelect;
export type NewUserProgress = typeof userProgress.$inferInsert;

export type UserStats = typeof userStats.$inferSelect;
export type NewUserStats = typeof userStats.$inferInsert;
