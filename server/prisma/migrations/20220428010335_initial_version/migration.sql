-- CreateEnum
CREATE TYPE "EnumCashflowContractAccount" AS ENUM ('FoxrunDeliveryEnt');

-- CreateEnum
CREATE TYPE "EnumCashflowContractBusinessEntity" AS ENUM ('FoxRunDelivery', 'Quantize', 'HybridInnovations');

-- CreateEnum
CREATE TYPE "EnumCashflowContractCategories" AS ENUM ('SoftwareSubscription', 'Misc', 'Income', 'Deposit', 'Withdrawal', 'OperatingCost', 'LoanPayment');

-- CreateEnum
CREATE TYPE "EnumCashflowContractTerm" AS ENUM ('Monthly', 'Quarterly', 'Yearly', 'UsersMonthly', 'UsersQuarterly');

-- CreateTable
CREATE TABLE "CashflowContract" (
    "account" "EnumCashflowContractAccount",
    "acquisitionDate" TIMESTAMP(3),
    "amountPerTerm" DOUBLE PRECISION,
    "businessEntity" "EnumCashflowContractBusinessEntity",
    "categories" "EnumCashflowContractCategories"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customServiceName" TEXT,
    "expenseDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "isSeries" BOOLEAN,
    "managerId" TEXT,
    "notes" TEXT,
    "oneTimeOnly" BOOLEAN,
    "seriesId" TEXT,
    "serviceName" TEXT,
    "term" "EnumCashflowContractTerm",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashflowContract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CashflowContractOnUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CashflowContractOnUsers_AB_unique" ON "_CashflowContractOnUsers"("A", "B");

-- CreateIndex
CREATE INDEX "_CashflowContractOnUsers_B_index" ON "_CashflowContractOnUsers"("B");

-- AddForeignKey
ALTER TABLE "CashflowContract" ADD CONSTRAINT "CashflowContract_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashflowContract" ADD CONSTRAINT "CashflowContract_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "CashflowContract"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CashflowContractOnUsers" ADD FOREIGN KEY ("A") REFERENCES "CashflowContract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CashflowContractOnUsers" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
