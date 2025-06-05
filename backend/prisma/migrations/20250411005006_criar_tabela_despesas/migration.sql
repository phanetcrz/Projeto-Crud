-- CreateTable
CREATE TABLE "despesas" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" DOUBLE PRECISION NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "despesas_pkey" PRIMARY KEY ("id")
);
