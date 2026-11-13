// Structural stand-in for Angular's ElementRef: any `{ nativeElement }` works.
export interface ElementLike<T = any> {
  nativeElement: T;
}
