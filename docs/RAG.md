### Key Points

- Nghiên cứu cho thấy RAG (Retrieval Augmented Generation) có thể được sử dụng để giao tiếp với AI Agent bằng cách cung cấp truy vấn rõ ràng, giúp AI truy xuất thông tin từ cơ sở kiến thức và tạo phản hồi chính xác.
- Có vẻ như người dùng chỉ cần hỏi câu hỏi, và AI sẽ tự động sử dụng RAG để cải thiện câu trả lời, nhưng việc cung cấp ngữ cảnh cụ thể có thể giúp tối ưu hóa kết quả.
- Một chi tiết bất ngờ: AI có thể cho phép người dùng chỉ định nguồn thông tin, nhưng điều này phụ thuộc vào cách hệ thống được thiết kế.

### Trả lời trực tiếp

#### Cách giao tiếp với AI Agent sử dụng RAG

Để giao tiếp với AI Agent sử dụng RAG, bạn chỉ cần gửi một truy vấn hoặc câu hỏi rõ ràng. AI sẽ tự động sử dụng RAG để truy xuất thông tin liên quan từ cơ sở kiến thức của nó, sau đó tạo ra câu trả lời chính xác và phù hợp với ngữ cảnh. Ví dụ, nếu bạn hỏi "Quy trình vận hành máy dập viên là gì?", AI có thể tìm thông tin từ tài liệu SOP và trả lời chi tiết.

#### Cung cấp ngữ cảnh để tối ưu hóa

Để đạt hiệu quả cao hơn, bạn nên cung cấp thêm ngữ cảnh trong câu hỏi, như "Tôi cần quy trình vận hành máy dập viên cho phòng sản xuất A". Điều này giúp AI tìm đúng thông tin từ cơ sở kiến thức, đặc biệt khi có nhiều SOP chồng chéo.

#### Một chi tiết bất ngờ

Một số AI Agent có thể cho phép bạn chỉ định nguồn thông tin, ví dụ, yêu cầu AI chỉ xem xét SOP từ một phòng ban cụ thể. Tuy nhiên, điều này phụ thuộc vào cách hệ thống được thiết kế, và không phải AI nào cũng hỗ trợ.

---

### Báo cáo chi tiết

#### Giới thiệu

Câu hỏi tập trung vào cách sử dụng RAG (Retrieval Augmented Generation) để giao tiếp với AI Agent, một công nghệ kết hợp việc truy xuất thông tin từ cơ sở kiến thức bên ngoài với khả năng tạo nội dung của mô hình ngôn ngữ lớn (LLM). Với 1800 SOP trong công ty, việc sử dụng RAG có thể giúp AI Agent cung cấp câu trả lời chính xác và phù hợp, đặc biệt khi có các SOP chồng chéo. Báo cáo này sẽ phân tích cách giao tiếp với AI Agent sử dụng RAG, bao gồm cách tối ưu hóa truy vấn và các chi tiết kỹ thuật liên quan, đồng thời đảm bảo hệ thống dễ sử dụng cho ban giám đốc không thuộc ngành IT.

#### Hiểu về RAG và AI Agent

RAG là một khung công tác AI, trong đó AI Agent truy xuất thông tin từ cơ sở kiến thức bên ngoài (như tài liệu SOP) để bổ sung cho dữ liệu huấn luyện nội tại, từ đó tạo ra câu trả lời chính xác hơn và giảm thiểu hiện tượng "hallucination" (trả lời sai hoặc không chính xác). Theo [What is retrieval-augmented generation (RAG)? - IBM Research](https://research.ibm.com/blog/retrieval-augmented-generation-RAG), RAG giúp AI "đặt chân" vào thông tin cập nhật nhất, đặc biệt hữu ích cho các nhiệm vụ đòi hỏi kiến thức cụ thể, như quản lý SOP.

Khi giao tiếp với AI Agent sử dụng RAG, người dùng thường chỉ cần gửi một truy vấn, và AI sẽ tự động thực hiện hai bước: (1) truy xuất thông tin liên quan từ cơ sở kiến thức, (2) tạo câu trả lời dựa trên thông tin đó. Ví dụ, nếu bạn hỏi "Quy trình vận hành máy dập viên là gì?", AI có thể tìm SOP liên quan và trả lời chi tiết, thay vì dựa vào kiến thức chung chung từ dữ liệu huấn luyện.

#### Cách giao tiếp hiệu quả với AI Agent sử dụng RAG

Nghiên cứu cho thấy cách giao tiếp hiệu quả với AI Agent sử dụng RAG phụ thuộc vào cách người dùng xây dựng truy vấn. Dưới đây là các bước cụ thể:

- **Gửi truy vấn rõ ràng và cụ thể**: Người dùng nên đặt câu hỏi trực tiếp, ví dụ, "Hãy cho tôi biết quy trình cân nguyên liệu cho phòng sản xuất B". Theo [Retrieval Augmented Generation (RAG) | Prompt Engineering Guide](https://www.promptingguide.ai/techniques/rag), việc cung cấp truy vấn rõ ràng giúp AI truy xuất đúng tài liệu từ cơ sở kiến thức, như Wikipedia hoặc cơ sở dữ liệu nội bộ của công ty.
- **Cung cấp ngữ cảnh bổ sung**: Để tối ưu hóa, người dùng có thể thêm ngữ cảnh, như "Tôi cần SOP vận hành máy ép vỉ, phiên bản mới nhất, cho phòng ban A". Điều này giúp AI lọc thông tin chính xác hơn, đặc biệt khi có nhiều SOP chồng chéo. Theo [What Is Retrieval-Augmented Generation aka RAG | NVIDIA Blogs](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/), việc cung cấp ngữ cảnh giúp AI giống như "nhân viên thư viện" tìm đúng tài liệu cần thiết.
- **Hiểu khả năng của AI**: Người dùng nên biết rằng AI có thể truy cập cơ sở kiến thức cụ thể, như tài liệu SOP đã được tải lên. Nếu AI được thiết kế để cho phép, người dùng có thể yêu cầu AI chỉ xem xét một nguồn nhất định, ví dụ, "Chỉ sử dụng SOP từ phòng sản xuất". Tuy nhiên, điều này phụ thuộc vào cách hệ thống được cấu hình, và không phải AI nào cũng hỗ trợ.

#### Một chi tiết bất ngờ

Một chi tiết đáng chú ý là một số AI Agent sử dụng RAG có thể cung cấp nguồn thông tin mà nó đã truy xuất, giúp người dùng kiểm tra tính chính xác, như trích dẫn đoạn văn từ SOP. Theo [What is RAG? - Retrieval-Augmented Generation AI Explained - AWS](https://aws.amazon.com/what-is/retrieval-augmented-generation/), điều này tăng tính minh bạch, đặc biệt hữu ích cho ban giám đốc khi cần xác minh thông tin trước khi ra quyết định. Tuy nhiên, tính năng này không phải lúc nào cũng có sẵn và phụ thuộc vào cách triển khai hệ thống.

#### Thiết kế giao diện cho ban giám đốc không thuộc ngành IT

Với ban giám đốc không quen thuộc với công nghệ, giao diện giao tiếp với AI Agent cần đơn giản. Ví dụ, hệ thống có thể hiển thị một hộp nhập liệu với hướng dẫn như "Hãy nhập câu hỏi của bạn, ví dụ: 'Quy trình vận hành máy dập viên là gì?'". Kết quả có thể hiển thị dưới dạng danh sách, với nút "Xem nguồn" để kiểm tra tài liệu SOP liên quan. Theo [Guides: RAG Chatbot](https://sdk.vercel.ai/docs/guides/rag-chatbot), việc tích hợp chatbot RAG giúp người dùng dễ dàng tương tác, với các câu trả lời được trình bày rõ ràng và có thể nhấp để xem chi tiết.

#### Bảng tóm tắt cách giao tiếp với AI Agent sử dụng RAG

| **Bước**             | **Mô tả**                                     | **Ví dụ**                                      |
| -------------------- | --------------------------------------------- | ---------------------------------------------- |
| Gửi truy vấn         | Đặt câu hỏi rõ ràng và cụ thể                 | "Quy trình vận hành máy dập viên là gì?"       |
| Cung cấp ngữ cảnh    | Thêm thông tin để giúp AI lọc đúng thông tin  | "Tôi cần SOP vận hành máy ép vỉ, phòng ban A"  |
| Kiểm tra kết quả     | Xem câu trả lời và nguồn thông tin (nếu có)   | Nhấp vào "Xem nguồn" để kiểm tra SOP liên quan |
| Tối ưu hóa tương tác | Yêu cầu AI chỉ định nguồn nếu hệ thống hỗ trợ | "Chỉ sử dụng SOP từ phòng sản xuất"            |

#### Kết luận

Nghiên cứu cho thấy giao tiếp với AI Agent sử dụng RAG đơn giản và hiệu quả nếu người dùng gửi truy vấn rõ ràng và cung cấp ngữ cảnh khi cần. Hệ thống có thể hỗ trợ thêm tính năng minh bạch, như hiển thị nguồn thông tin, giúp ban giám đốc dễ dàng sử dụng và ra quyết định. Với 1800 SOP và khả năng chồng chéo, RAG là công cụ mạnh mẽ để đảm bảo thông tin chính xác và phù hợp.

#### Key Citations

- [What is retrieval-augmented generation (RAG)? - IBM Research](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
- [What Is Retrieval-Augmented Generation aka RAG | NVIDIA Blogs](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
- [Retrieval Augmented Generation (RAG) | Prompt Engineering Guide](https://www.promptingguide.ai/techniques/rag)
- [What is RAG? - Retrieval-Augmented Generation AI Explained - AWS](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
- [What is retrieval-augmented generation (RAG)? - IBM Research](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)
- [Retrieval Augmented Generation (RAG): The Essential Guide | Nightfall AI Security 101](https://www.nightfall.ai/ai-security-101/retrieval-augmented-generation-rag)
- [Guides: RAG Chatbot](https://sdk.vercel.ai/docs/guides/rag-chatbot)
- [Build a RAG Chatbot With NVIDIA NIM Microservices](https://www.nvidia.com/en-us/ai-data-science/ai-workflows/generative-ai-chatbot-with-rag/)
