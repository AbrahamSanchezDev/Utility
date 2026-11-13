import { DownloadTool } from './download-tool';

describe('DownloadTool', () => {
  let service: DownloadTool;

  beforeEach(() => {
    service = new DownloadTool();

    vi.spyOn(console, 'log');
  });
  afterAll(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Create and download the file', () => {
    service.DownloadTextToFileAsJson(null, '');
    expect(console.log).toHaveBeenCalled();
    service.DownloadTextToFileAsJson('some text', null);
    expect(console.log).toHaveBeenCalled();

    window.URL.createObjectURL = vi.fn(() => 'blob:x'); // jsdom lacks it
    window.URL.revokeObjectURL = vi.fn();
    vi.spyOn(service.linkElement, 'click').mockImplementation(() => {});
    service.DownloadTextToFileAsJson('some text', 'test');
    expect(window.URL.createObjectURL).toHaveBeenCalled();
    expect(window.URL.revokeObjectURL).toHaveBeenCalled();
  });
});
