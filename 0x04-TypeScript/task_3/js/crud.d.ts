import { RowID, RowElement } from '../interface.ts';

export function updateRow(rowId: RowID, row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function insertRow(row: RowElement): number;

