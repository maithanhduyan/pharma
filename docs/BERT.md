### Key Points

- Nghiên cứu cho thấy có thể sử dụng AI để xử lý 1800 SOP và phát hiện chồng chéo, với các bước như thu thập dữ liệu, tạo embeddings, và phân cụm.
- Bằng chứng nghiêng về việc sử dụng mô hình ngôn ngữ như Sentence-BERT để phân tích văn bản, nhưng cần xử lý dữ liệu theo lô do giới hạn tài nguyên.
- Hệ thống cần giao diện thân thiện, với bảng điều khiển trực quan và hướng dẫn rõ ràng cho ban giám đốc không thuộc ngành IT.

---

### Direct Answer

#### Tổng quan

Để xử lý 1800 SOP với các chồng chéo trong công ty, bạn có thể sử dụng AI để phát hiện và đề xuất tinh gọn. Dưới đây là cách tiếp cận để đưa dữ liệu lớn vào AI và làm hệ thống dễ sử dụng cho ban giám đốc không thuộc ngành IT.

#### Cách xử lý dữ liệu lớn cho AI

- **Thu thập và chuẩn bị dữ liệu**: Chuyển tất cả SOP sang định dạng văn bản, sử dụng công cụ như PDFminer ([spaCy for Text Processing](https://spacy.io/)) để trích xuất nếu cần. Xử lý theo lô để tránh quá tải, ví dụ, xử lý 100 SOP mỗi lần.
- **Phân tích bằng AI**: Sử dụng mô hình như Sentence-BERT ([Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://www.sbert.net/)) để tạo embeddings, sau đó so sánh để tìm điểm tương đồng. Có thể tóm tắt SOP trước để giảm kích thước dữ liệu, nhưng cần cân nhắc mất chi tiết.
- **Tài nguyên tính toán**: Sử dụng dịch vụ đám mây như AWS hoặc Google Cloud để xử lý lượng lớn dữ liệu, đảm bảo hệ thống mở rộng được.

#### Làm hệ thống dễ sử dụng

- **Giao diện thân thiện**: Xây dựng bảng điều khiển web với các nút như "Xem tất cả SOP", "So sánh SOP", và "Tạo báo cáo". Sử dụng biểu đồ đơn giản, như danh sách SOP tương tự, thay vì đồ thị kỹ thuật.
- **Hướng dẫn rõ ràng**: Cung cấp hướng dẫn bằng văn bản và video, giải thích cách xem kết quả AI, ví dụ, "Những SOP này có thể gộp lại vì cùng đề cập đến quy trình cân nguyên liệu."
- **Phản hồi và quyết định**: Cho phép ban giám đốc phê duyệt hoặc yêu cầu phân tích thêm trực tiếp trên giao diện, với báo cáo tóm tắt để chia sẻ.

Một chi tiết bất ngờ: AI có thể tự động phát hiện SOP theo phòng ban, giúp lọc dữ liệu và giảm tải cho người dùng, nhưng cần đảm bảo bảo mật thông tin nhạy cảm.

---

---

### Báo cáo chi tiết

#### Giới thiệu

Công ty có 1800 SOP trải rộng qua các phòng ban, với một số SOP chồng chéo, gây khó khăn trong quản lý và thực hiện. Để giải quyết, hệ thống cần sử dụng các tác nhân AI (AI agents) để phát hiện và đề xuất tinh gọn các SOP. Tuy nhiên, thách thức lớn là làm thế nào để xử lý lượng dữ liệu lớn này và làm cho hệ thống dễ sử dụng cho ban giám đốc không thuộc ngành IT. Báo cáo này sẽ phân tích cách tiếp cận, bao gồm xử lý dữ liệu, phân tích AI, và thiết kế giao diện thân thiện.

#### Xử lý dữ liệu lớn cho AI

##### Thu thập và chuẩn bị dữ liệu

- **Định dạng dữ liệu**: Đầu tiên, cần đảm bảo tất cả 1800 SOP được số hóa. Nếu một số SOP ở dạng PDF hoặc tài liệu quét, sử dụng công cụ như PDFminer ([spaCy for Text Processing](https://spacy.io/)) để trích xuất văn bản. Nếu đã ở định dạng văn bản, có thể trực tiếp sử dụng.
- **Xử lý theo lô**: Với lượng lớn dữ liệu, không thể xử lý tất cả cùng lúc do giới hạn tài nguyên tính toán, đặc biệt nếu sử dụng mô hình ngôn ngữ lớn (LLMs) như GPT-3, có cửa sổ ngữ cảnh khoảng 4096 token (khoảng 3000-4000 từ). Vì vậy, chia nhỏ dữ liệu thành các lô, ví dụ, xử lý 100 SOP mỗi lần, để tránh quá tải.
- **Tiền xử lý**: Sau khi trích xuất, cần làm sạch văn bản, loại bỏ tiêu đề, chân trang, hoặc ký tự không cần thiết. Có thể sử dụng thư viện như spaCy để chuẩn hóa văn bản, ví dụ, loại bỏ từ dừng (stop words) và dấu câu.

##### Phân tích bằng AI

- **Tạo embeddings**: Sử dụng mô hình ngôn ngữ tiền huấn luyện như Sentence-BERT ([Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://www.sbert.net/)) để tạo embeddings cho mỗi SOP. Sentence-BERT tạo ra các vector số biểu diễn ý nghĩa của văn bản, phù hợp để so sánh tương đồng. Nếu SOP dài, có thể chia thành câu, tạo embeddings cho từng câu, rồi lấy trung bình để có vector đại diện cho toàn bộ SOP.
- **So sánh và phân cụm**: So sánh các embeddings bằng thước đo như độ tương đồng cosin (cosine similarity) để tìm SOP tương tự. Sau đó, sử dụng thuật toán phân cụm như K-means hoặc phân cụm phân cấp để nhóm các SOP có điểm tương đồng cao, giúp phát hiện chồng chéo.
- **Tóm tắt và cân nhắc**: Một cách tiếp cận khác là tóm tắt mỗi SOP trước khi tạo embeddings, giảm kích thước dữ liệu. Tuy nhiên, cần cân nhắc vì tóm tắt có thể làm mất chi tiết quan trọng, ảnh hưởng đến việc phát hiện chồng chéo. Nghiên cứu cho thấy tóm tắt chỉ nên áp dụng nếu SOP rất dài và không ảnh hưởng đến nội dung cốt lõi.

##### Tài nguyên tính toán

- Với 1800 SOP, việc tạo embeddings và so sánh có thể yêu cầu tài nguyên lớn. Công ty nên sử dụng dịch vụ đám mây như AWS ([AWS Machine Learning](https://aws.amazon.com/machine-learning/)) hoặc Google Cloud ([Google Cloud AI](https://cloud.google.com/ai)) để xử lý, đảm bảo hệ thống mở rộng được. Có thể sử dụng xử lý song song hoặc phân phối để tăng tốc độ, đặc biệt khi số lượng SOP tăng trong tương lai.

#### Làm hệ thống dễ sử dụng cho ban giám đốc không thuộc ngành IT

##### Thiết kế giao diện thân thiện

- **Bảng điều khiển trực quan**: Xây dựng ứng dụng web với giao diện đơn giản, có các nút như "Xem tất cả SOP", "Xem cụm SOP tương tự", "So sánh SOP", và "Tạo báo cáo". Tránh sử dụng thuật ngữ kỹ thuật như "embeddings" hoặc "phân cụm", thay vào đó dùng ngôn ngữ kinh doanh, ví dụ, "Những SOP này có thể gộp lại vì cùng đề cập đến quy trình cân nguyên liệu."
- **Hiển thị kết quả**: Thay vì đồ thị phức tạp, sử dụng danh sách hoặc bảng để hiển thị SOP tương tự, với điểm tương đồng (ví dụ, 85% tương đồng). Có thể thêm nút "Xem chi tiết" để so sánh nội dung hai SOP bên cạnh nhau.
- **Hướng dẫn và hỗ trợ**: Cung cấp tài liệu hướng dẫn bằng văn bản và video, giải thích cách sử dụng hệ thống. Ví dụ, video ngắn có thể hướng dẫn cách nhấp vào cụm SOP để xem đề xuất, hoặc cách phê duyệt gộp SOP.

##### Quy trình làm việc cho ban giám đốc

- **Đăng nhập và xem tổng quan**: Ban giám đốc có thể đăng nhập vào hệ thống, thấy bảng điều khiển với số liệu như "120 SOP có chồng chéo", "1680 SOP độc nhất".
- **Khám phá cụm**: Nhấp vào cụm để xem danh sách SOP, với lý do AI gợi ý, ví dụ, "Cả hai SOP đều nói về vận hành máy dập viên, có thể gộp lại."
- **So sánh và quyết định**: Có thể so sánh hai SOP, chọn "Gộp SOP", "Sửa đổi", hoặc "Giữ nguyên". Hệ thống cho phép đánh dấu quyết định và tạo báo cáo để chia sẻ với các bên liên quan.
- **Lọc theo phòng ban**: Hệ thống nên cho phép lọc SOP theo phòng ban, vì có thể chỉ muốn so sánh trong cùng phòng ban, giảm tải cho người dùng.

##### Bảo mật và cập nhật

- **Bảo mật dữ liệu**: Vì SOP có thể chứa thông tin nhạy cảm, hệ thống cần có kiểm soát truy cập, chỉ cho phép ban giám đốc và các phòng ban liên quan xem dữ liệu của họ. Sử dụng mã hóa và tuân thủ quy định như GDPR nếu áp dụng.
- **Cập nhật hệ thống**: Hệ thống nên tự động quét để phát hiện SOP mới hoặc thay đổi, cập nhật phân tích mà không cần xử lý lại toàn bộ. Có thể lập lịch chạy định kỳ, ví dụ, mỗi tuần một lần, hoặc cho phép kích hoạt thủ công.

#### Một chi tiết bất ngờ

Một chi tiết đáng chú ý là AI có thể tự động phát hiện SOP theo phòng ban dựa trên nội dung, giúp lọc dữ liệu và giảm tải cho người dùng. Ví dụ, AI có thể gán nhãn "Phòng sản xuất" cho các SOP liên quan đến vận hành máy, từ đó chỉ so sánh trong phạm vi phòng ban, nhưng cần đảm bảo bảo mật thông tin nhạy cảm, đặc biệt khi SOP chứa thông tin nội bộ.

#### Bảng tóm tắt quy trình

| **Bước**            | **Mô tả**                                                             | **Công cụ gợi ý**                                                                                                                    |
| ------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Thu thập dữ liệu    | Chuyển SOP sang văn bản, xử lý theo lô (100 SOP/lần)                  | PDFminer, spaCy ([spaCy for Text Processing](https://spacy.io/))                                                                     |
| Tạo embeddings      | Sử dụng Sentence-BERT để tạo vector biểu diễn mỗi SOP                 | Sentence-BERT ([Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://www.sbert.net/))                             |
| So sánh và phân cụm | Tìm SOP tương tự bằng độ tương đồng cosin, nhóm bằng K-means          | Scikit-learn, NumPy                                                                                                                  |
| Thiết kế giao diện  | Bảng điều khiển web với danh sách và nút "So sánh", hướng dẫn rõ ràng | React, Flask                                                                                                                         |
| Cập nhật và bảo mật | Quét định kỳ, mã hóa dữ liệu, kiểm soát truy cập                      | AWS, Google Cloud ([AWS Machine Learning](https://aws.amazon.com/machine-learning/), [Google Cloud AI](https://cloud.google.com/ai)) |

#### Kết luận

Hệ thống AI này không chỉ xử lý được lượng lớn dữ liệu SOP mà còn cung cấp giao diện thân thiện, giúp ban giám đốc không thuộc ngành IT dễ dàng sử dụng. Bằng cách tự động phát hiện chồng chéo và đề xuất tinh gọn, hệ thống cải thiện hiệu quả quản lý, đồng thời đảm bảo bảo mật và khả năng mở rộng.

#### Key Citations

- [spaCy for Text Processing](https://spacy.io/)
- [Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks](https://www.sbert.net/)
- [AWS Machine Learning](https://aws.amazon.com/machine-learning/)
- [Google Cloud AI](https://cloud.google.com/ai)
