import Day from './Day';
import Options from './Options';
import ViewModel_ from './ViewModel';
import { DayOfWeek } from './Helper';
interface HTMLDayButtonElement extends HTMLAnchorElement {
    day: Day;
}
export declare class YearCellData_ {
    readonly yearNumber: number;
    isAvailable: boolean;
    isSelected: boolean;
    isHighlighted: boolean;
    isFocused: boolean;
    constructor(yearNumber: number);
}
interface HTMLYearButtonElement extends HTMLAnchorElement {
    yearCellData: YearCellData_;
}
export default class Template_ {
    private readonly options_;
    private readonly container_;
    private readonly hasInput_;
    private mainElement_;
    private bodyElement_;
    private tablesElement_;
    private tableElement_;
    private tableOfYearsElement_;
    private controlElement_;
    private goBackElement_;
    private goForwardElement_;
    private titleElement_;
    private titleContentElement_;
    private resetElement_;
    private resetButton_;
    private closeElement_;
    private closeButton_;
    private monthSelect_;
    private monthElement_;
    private yearActiveElement_;
    private yearTextElement_;
    private monthAndYearSelect_;
    private monthAndYearElement_;
    private weeksElements_;
    private daysElements_;
    private daysButtonsElements_;
    private daysContentsElements_;
    private yearsElements_;
    private yearsButtonsElements_;
    private yearsContentsElements_;
    private onAfterSlide_;
    constructor(options_: Options, container_: HTMLElement, hasInput_: boolean);
    render_(viewModel: ViewModel_): void;
    protected createSkeleton_(viewModel: ViewModel_): HTMLElement;
    protected updateMainElement_(viewModel: ViewModel_): void;
    protected updateTableElements_(viewModel: ViewModel_): void;
    protected createBodyElement_(viewModel: ViewModel_): HTMLElement;
    protected createHeaderElement_(viewModel: ViewModel_): HTMLElement;
    protected updateTopElement_(viewModel: ViewModel_): void;
    protected createTitleElement_(viewModel: ViewModel_): HTMLElement;
    protected updateTitleElement_(viewModel: ViewModel_): void;
    protected createResetElement_(viewModel: ViewModel_): HTMLElement;
    protected updateResetElement_(viewModel: ViewModel_): void;
    protected createCloseElement_(viewModel: ViewModel_): HTMLElement;
    protected updateCloseElement_(viewModel: ViewModel_): void;
    protected createGoElement_(viewModel: ViewModel_, isForward: boolean): HTMLElement;
    protected updateGoElement_(viewModel: ViewModel_, isForward: boolean): void;
    protected createMonthElement_(viewModel: ViewModel_): HTMLElement;
    protected updateMonthElement_(viewModel: ViewModel_): void;
    protected createYearElement_(viewModel: ViewModel_): HTMLElement;
    protected updateYearElement_(viewModel: ViewModel_): void;
    protected createMonthAndYearElement_(viewModel: ViewModel_): HTMLElement;
    protected updateMonthAndYearElement_(viewModel: ViewModel_): void;
    private translateMonthAndYear_;
    private calculateMonthAndYearIndex_;
    private getMonthAndYearByIndex_;
    private getMonthAndYearOptionValue_;
    private parseMonthAndYearOptionValue_;
    private calculateDropdownRange_;
    private calculateDropdownDiff_;
    protected createTableElement_(viewModel: ViewModel_): HTMLElement;
    protected createTableHeaderElement_(viewModel: ViewModel_): HTMLElement;
    protected createTableHeaderCellElement_(viewModel: ViewModel_, dayOfWeek: DayOfWeek): HTMLElement;
    protected createTableBodyElement_(viewModel: ViewModel_): HTMLElement;
    protected updateWeeksElements_(viewModel: ViewModel_): void;
    protected createTableRowElement_(viewModel: ViewModel_): HTMLElement;
    protected updateDayElement_(viewModel: ViewModel_, dayElement: HTMLElement, dayButtonElement: HTMLDayButtonElement, dayContentElement: HTMLElement, day: Day): void;
    protected createTableCellButtonElement_(viewModel: ViewModel_): HTMLDayButtonElement;
    protected createTableCellContentElement_(viewModel: ViewModel_): HTMLElement;
    protected createTableOfYearsElement_(viewModel: ViewModel_): HTMLElement;
    protected createTableOfYearsBodyElement_(viewModel: ViewModel_): HTMLElement;
    protected updateTableOfYearsRowsElements_(viewModel: ViewModel_): void;
    protected updateTableOfYearsCellElement_(viewModel: ViewModel_, yearElement: HTMLElement, yearButtonElement: HTMLYearButtonElement, yearContentElement: HTMLElement, yearCellData: YearCellData_): void;
    protected createTableOfYearsRowElement_(viewModel: ViewModel_): HTMLElement;
    protected createTableOfYearsCellButtonElement_(viewModel: ViewModel_): HTMLYearButtonElement;
    protected createTableOfYearsCellContentElement_(viewModel: ViewModel_): HTMLElement;
    private slideTable_;
    private translateMonth_;
    private updateTitle_;
}
export {};
