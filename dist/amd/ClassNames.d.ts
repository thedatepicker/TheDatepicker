export declare enum ClassNameType {
    Container = 0,
    ContainerOver = 1,
    ContainerLeft = 2,
    ContainerResponsive = 3,
    Main = 4,
    Body = 5,
    BodySwipeable = 6,
    Tables = 7,
    Header = 8,
    HeaderTop = 9,
    HeaderControl = 10,
    HeaderNavigation = 11,
    HeaderState = 12,
    HeaderMonth = 13,
    HeaderYear = 14,
    HeaderMonthYear = 15,
    HeaderYearsToggle = 16,
    Button = 17,
    ButtonContent = 18,
    SelectInput = 19,
    Deselect = 20,
    DeselectButton = 21,
    HeaderTitle = 22,
    HeaderTitleContent = 23,
    Reset = 24,
    Close = 25,
    Go = 26,
    GoNext = 27,
    GoPrevious = 28,
    Table = 29,
    TableRow = 30,
    TableCell = 31,
    TableCellUnavailable = 32,
    TableCellHighlighted = 33,
    TableCellSelected = 34,
    CalendarTable = 35,
    CalendarTableHeader = 36,
    CalendarTableHeaderCell = 37,
    CalendarTableBody = 38,
    YearsTable = 39,
    YearsTableBody = 40,
    WeekDayWeekend = 41,
    Day = 42,
    DayToday = 43,
    DayPast = 44,
    DayWeekend = 45,
    DayUnavailable = 46,
    DayOutside = 47,
    DayHighlighted = 48,
    DaySelected = 49,
    DayButton = 50,
    DayButtonContent = 51,
    YearCellButton = 52,
    YearCellButtonContent = 53,
    Animated = 54,
    AnimateFadeOutLeft = 55,
    AnimateFadeInRight = 56,
    AnimateFadeOutUp = 57,
    AnimateFadeInDown = 58,
    AnimateFadeOutRight = 59,
    AnimateFadeInLeft = 60,
    AnimateFadeOutDown = 61,
    AnimateFadeInUp = 62,
    ContainerDarkMode = 63
}
export default class ClassNames {
    private classNames_;
    clone(): ClassNames;
    setClassName(type: ClassNameType, className: string | string[] | null): void;
    addClassName(type: ClassNameType, className: string | string[]): void;
    getClassName(type: ClassNameType): string[];
    private checkType_;
    private normalizeClassName_;
}
